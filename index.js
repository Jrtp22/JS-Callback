const inventory = newInventory()
move(inventory).to(0, 0)

const dude = newImage('assets/green-character.gif')

function handleDirectionChange(direction) {
    if (direction === null) {
        dude.src = 'assets/green-character/static.gif'
    }
    if (direction === 'west') {
        dude.src = 'assets/green-character/west.gif'
    }
    if (direction === 'north') {
        dude.src = 'assets/green-character/north.gif'
    }
    if (direction === 'east') {
        dude.src = 'assets/green-character/east.gif'
    }
    if (direction === 'south') {
        dude.src = 'assets/green-character/south.gif'
    }
}

move(dude).withArrowKeys(100, 250, handleDirectionChange)



move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)

