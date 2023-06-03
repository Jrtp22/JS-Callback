function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    function moveWithArrowKeys(left, bottom, dudeGif) {
        let direction = null;
        let x = left;
        let y = bottom;
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'

        function moveDude() {
            if (direction === 'west') {
                x = x - 1
            }
            if (direction === 'south') {
                y = y - 1
            };
            if (direction === 'east') {
                x = x + 1
            };
            if (direction === 'north') {
                y = y + 1
            }
            element.style.left = x + 'px'
            element.style.bottom = y + 'px'
        }

        setInterval(moveDude, 1)

        document.addEventListener('keydown', function (e) {
            if (e.repeat) return;

            if (e.key === 'ArrowLeft') {
                direction = 'west';
            }
            if (e.key === 'ArrowDown') {
                direction = 'south'
            }
            if (e.key === 'ArrowRight') {
                direction = 'east'
            }
            if (e.key === 'ArrowUp') {
                direction = 'north';
            }
            dudeGif(direction);
        })
        document.addEventListener('keyup', function (e) {
            direction = null
        })
        dudeGif(direction);
    }

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }
}