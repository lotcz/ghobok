var VIEW_ANGLE = 60;

var RIGHT_ANGLE = 1.57079633;
var DOUBLE_RIGHT_ANGLE = RIGHT_ANGLE * 2;
var TILE_SIZE = 600;
var TILE_SIZE_HALF = 300;

var	DIRECTION_NORTH = 0;
var DIRECTION_EAST = 1;
var DIRECTION_SOUTH = 2;
var DIRECTION_WEST = 3;

var DIRECTION_NORTH_RADS = 0;
var DIRECTION_EAST_RADS = RIGHT_ANGLE;
var DIRECTION_SOUTH_RADS = DOUBLE_RIGHT_ANGLE;
var DIRECTION_WEST_RADS = - RIGHT_ANGLE;

var TILE_TYPE_FLOOR = 0;
var TILE_TYPE_CEILING = 1;
var TILE_TYPE_WALL = 2;

var TURN_LEFT = 1;
var TURN_RIGHT = -1;
var TURN_BACK = -2;