Hooks.once('ready', async () => {
    console.warn("Hey dawg what's going on? Not much dudeee.");
});

Hooks.on('dropActorSheetData', async (actor, sheet, data) => {
    console.warn("Something just got DROPPED.");
    console.log(actor, sheet, data, event);
    const targetItemID = event.target.closest('li').getAttribute('data-item-id');
    console.log(targetItemID);
    console.log(event.target.closest('li'));
    console.log(actor.items.get(targetItemID));
});