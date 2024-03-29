import GloopItem from "../gloop/GloopItem.js";

export default class BoardCell extends GloopItem {
    constructor(x, y, board){
        super()
        this.cellX = x
        this.cellY = y
        this.board = board
        this.color = 'black'
        this.position()
        this.size()
    }
    draw(g){
        g.color(this.color)
        g.rect(this)
    }
    next(){
        this.position()
    }

    position(){
        this.x = this.board.xOfColumn(this.cellX)
        this.y = this.board.yOfRow(this.cellY)
        
    }
    size(){
        this.w = this.board.colWidth
        this.h = this.board.rowHeight
    }
    color(color){
        this.color = color
    }
}

BoardCell.random = board => new BoardCell(
    Math.floor(Math.random() * board.colCount),
    Math.floor(Math.random() * board.rowCount),
    board
)