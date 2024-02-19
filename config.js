const CELL_TYPES = {
      block: './Assets/block.png',
      capBottom: './Assets/capBottom.png',
      capLeft: './Assets/capLeft.png',
      capRight: './Assets/capRight.png',
      capTop: './Assets/capTop.png',
      pipeConnectorBottom: './Assets/pipeConnectorBottom.png',
      pipeConnectorDownwards: './Assets/pipeConnectorDownwards.png',
      pipeConnectorLeft: './Assets/pipeConnectorLeft.png',
      pipeConnectorRight: './Assets/pipeConnectorRight.png',
      pipeConnectorTop: './Assets/pipeConnectorTop.png',
      pipeCorner1: './Assets/pipeCorner1.png',
      pipeCorner2: './Assets/pipeCorner2.png',
      pipeCorner3: './Assets/pipeCorner3.png',
      pipeCorner4: './Assets/pipeCorner4.png',
      pipeCross: './Assets/pipeCross.png',
      pipeHorizontal: './Assets/pipeHorizontal.png',
      pipeVertical: './Assets/pipeVertical.png',
      empty: '',
      player: './Assets/player.png'
}

/**
*2D matrix representation containing images of cell names.
*/
const MAP = [
      [CELL_TYPES.pipeCorner1, CELL_TYPES.pipeHorizontal, CELL_TYPES.pipeHorizontal, CELL_TYPES.pipeHorizontal, CELL_TYPES.pipeHorizontal, CELL_TYPES.pipeHorizontal, CELL_TYPES.pipeHorizontal, CELL_TYPES.pipeHorizontal, CELL_TYPES.pipeHorizontal, CELL_TYPES.pipeHorizontal, CELL_TYPES.pipeCorner2],
      [CELL_TYPES.pipeVertical, CELL_TYPES.empty, CELL_TYPES.empty, CELL_TYPES.empty, CELL_TYPES.empty, CELL_TYPES.empty, CELL_TYPES.empty, CELL_TYPES.empty, CELL_TYPES.empty, CELL_TYPES.empty, CELL_TYPES.pipeVertical],
      [CELL_TYPES.pipeVertical, CELL_TYPES.empty, CELL_TYPES.block, CELL_TYPES.empty, CELL_TYPES.capLeft, CELL_TYPES.pipeConnectorBottom, CELL_TYPES.capRight, CELL_TYPES.empty, CELL_TYPES.block, CELL_TYPES.empty, CELL_TYPES.pipeVertical],
      [CELL_TYPES.pipeVertical, CELL_TYPES.empty, CELL_TYPES.empty, CELL_TYPES.empty, CELL_TYPES.empty, CELL_TYPES.capBottom, CELL_TYPES.empty, CELL_TYPES.empty, CELL_TYPES.empty, CELL_TYPES.empty, CELL_TYPES.pipeVertical],
      [CELL_TYPES.pipeVertical, CELL_TYPES.empty, CELL_TYPES.capLeft, CELL_TYPES.capRight, CELL_TYPES.empty, CELL_TYPES.empty, CELL_TYPES.empty, CELL_TYPES.capLeft, CELL_TYPES.capRight, CELL_TYPES.empty, CELL_TYPES.pipeVertical],
      [CELL_TYPES.pipeVertical, CELL_TYPES.empty, CELL_TYPES.empty, CELL_TYPES.empty, CELL_TYPES.empty, CELL_TYPES.capTop, CELL_TYPES.empty, CELL_TYPES.empty, CELL_TYPES.empty, CELL_TYPES.empty, CELL_TYPES.pipeVertical],
      [CELL_TYPES.pipeVertical, CELL_TYPES.empty, CELL_TYPES.block, CELL_TYPES.empty, CELL_TYPES.capLeft, CELL_TYPES.pipeCross, CELL_TYPES.capRight, CELL_TYPES.empty, CELL_TYPES.block, CELL_TYPES.empty, CELL_TYPES.pipeVertical],
      [CELL_TYPES.pipeVertical, CELL_TYPES.empty, CELL_TYPES.empty, CELL_TYPES.empty, CELL_TYPES.empty, CELL_TYPES.capBottom, CELL_TYPES.empty, CELL_TYPES.empty, CELL_TYPES.empty, CELL_TYPES.empty, CELL_TYPES.pipeVertical],
      [CELL_TYPES.pipeVertical, CELL_TYPES.empty, CELL_TYPES.capLeft, CELL_TYPES.capRight, CELL_TYPES.empty, CELL_TYPES.empty, CELL_TYPES.empty, CELL_TYPES.capLeft, CELL_TYPES.capRight, CELL_TYPES.empty, CELL_TYPES.pipeVertical],
      [CELL_TYPES.pipeVertical, CELL_TYPES.empty, CELL_TYPES.empty, CELL_TYPES.empty, CELL_TYPES.empty, CELL_TYPES.capTop, CELL_TYPES.empty, CELL_TYPES.empty, CELL_TYPES.empty, CELL_TYPES.empty, CELL_TYPES.pipeVertical],
      [CELL_TYPES.pipeVertical, CELL_TYPES.empty, CELL_TYPES.block, CELL_TYPES.empty, CELL_TYPES.capLeft, CELL_TYPES.pipeConnectorTop, CELL_TYPES.capRight, CELL_TYPES.empty, CELL_TYPES.block, CELL_TYPES.empty, CELL_TYPES.pipeVertical],
      [CELL_TYPES.pipeVertical, CELL_TYPES.empty, CELL_TYPES.empty, CELL_TYPES.empty, CELL_TYPES.empty, CELL_TYPES.empty, CELL_TYPES.empty, CELL_TYPES.empty, CELL_TYPES.empty, CELL_TYPES.empty, CELL_TYPES.pipeVertical],
      [CELL_TYPES.pipeCorner4, CELL_TYPES.pipeHorizontal, CELL_TYPES.pipeHorizontal, CELL_TYPES.pipeHorizontal, CELL_TYPES.pipeHorizontal, CELL_TYPES.pipeHorizontal, CELL_TYPES.pipeHorizontal, CELL_TYPES.pipeHorizontal, CELL_TYPES.pipeHorizontal, CELL_TYPES.pipeHorizontal, CELL_TYPES.pipeCorner3]
];