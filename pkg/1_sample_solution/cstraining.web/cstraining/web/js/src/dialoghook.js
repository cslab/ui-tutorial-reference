export function setMandatoryHook(ctx) {
    const description_field = 'cst_ticket_description_txt.cst_ticket_description_txt';
    if (ctx.getValue('cst_ticket.priority') === 'urgent') {
        ctx.setMandatory(description_field);
        ctx.setValue(description_field, 'The problem is urgent because ...');
    } else {
        ctx.setOptional(description_field);
        ctx.setValue(description_field, 'Problem description ...');
    }
}
