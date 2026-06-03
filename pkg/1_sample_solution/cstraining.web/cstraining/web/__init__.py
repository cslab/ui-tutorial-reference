#!/usr/bin/env powerscript
# -*- mode: python; coding: utf-8 -*-

import datetime

from cdb import auth
from cdb import util
from cdb.objects.core import Object

from cdb.platform.gui import PythonColumnProvider


class Ticket(Object):
    __classname__ = "cst_ticket"
    __maps_to__ = "cst_ticket"

    def set_raised_by(self, ctx):
        ctx.set('raised_by', auth.persno)

    def make_number(self, ctx):
        self.id = "T%09d" % (util.nextval("CST_TICKET_NR"))

    def set_description_mandatory(self, ctx):
        if ctx.dialog.priority == 'urgent':
            ctx.set_mandatory('cst_ticket_description_txt')
        else:
            ctx.set_optional('cst_ticket_description_txt')

    event_map = {
        (('create', 'copy'), 'pre'): ('make_number'),
        (('create', 'copy'), 'pre_mask'): ('set_raised_by'),
        (('create', 'copy', 'modify'), ('dialogitem_change', 'pre_mask')): ('set_description_mandatory')
    }


class TicketLog(Object):
    __classname__ = "cst_ticket_log"
    __maps_to__ = "cst_ticket_log"

    def set_current_date(self, ctx):
        ctx.set('cdate', datetime.datetime.now().isoformat())

    event_map = {
        (('create', 'copy'), 'pre_mask'): ('set_current_date')
    }


class TicketLogDescriptionProvider(PythonColumnProvider):
    @staticmethod
    def getColumnDefinitions(classname, query_args):
        return [
            {
                'column_id': 'cst_ticket_log_notes_txt',
                'label': util.get_label('cst_ticket_log_notes_txt'),
                'data_type': 'text',
                'width': 40,
            }
        ]

    @staticmethod
    def getColumnData(classname, table_data):
        log_ids = [log.get('cdb_object_id') for log in table_data]
        logs = TicketLog.KeywordQuery(cdb_object_id=log_ids)
        text_cache = {log.cdb_object_id:
                      log.GetText('cst_ticket_log_notes_txt') for log in logs}
        return [
            {'cst_ticket_log_notes_txt': text_cache.get(log_id, '')}
            for log_id in log_ids
        ]

    @staticmethod
    def getRequiredColumns(classname, available_columns):
        return ['cdb_object_id']

def ticket_set_mandatory_hook(hook):
    priority = hook.get_new_values().get('cst_ticket.priority', '')
    if priority == 'urgent':
        hook.set_mandatory('cst_ticket_description_txt.cst_ticket_description_txt')
    else:
        hook.set_optional('cst_ticket_description_txt.cst_ticket_description_txt')