const tictactoe={
    isSameRow(one,two,three){
        if(this.isRowBlank(one,two,three)){
            return false;
        } 
        return one===two && one===three;
    },
    
    isRowBlank(one,two,three){
        return this.isButtonBlank(one) && this.isButtonBlank(two) && this.isButtonBlank(three);
    },
    
    isButtonBlank(button){
        return button.trim().length==0?true:false;
    },
}