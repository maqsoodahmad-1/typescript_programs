function fancyDate(){
   return ${this.getDate()}/${this.getMonth()}/${this.getFullYear()}
}
fancyDate.call(new Date)
