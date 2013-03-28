define(['grid', 'robot'], function(Grid, Robot) {

    jasmine.getFixtures().fixturesPath = 'base/test/fixtures';
    loadFixtures('index.html');

    describe('When a robot moves to a cell with an item', function() {

        var grid = new Grid(),
            robot = new Robot(grid);
        grid.start();

        beforeEach(function() {
            // Maze is randomly created. Ensure that the current cell has no barriers
            var cells = grid.getCells();
            cells.removeClass('wall-up wall-down wall-left wall-right');
            directions = ['up', 'down', 'left', 'right'];
        });

        it('should be removed', function() {
            var $rightCell = robot.getCellForPosition({ x: 1, y: 2 });
            $rightCell.append('<span class="item" />');

            robot.right();
            robot.move();
            expect($rightCell.find('span.item')).not.toHaveClass('item');
        });
    });

    describe('when a robot starts on a cell with an item', function() {

        var grid = new Grid(),
            robot = new Robot(grid);
        grid.start();

        it('should be removed', function() {
            var $cell = robot.getCell();
            expect($cell.find('span.item')).not.toHaveClass('item');
        });
    });
});
