# Go Notebook

I wanted to create a tool that would let me log the sequence of moves in a go game. This is a ongoing project to build a personal tool that helps me catalouge and better understand my own playing. This is also a challenge for me to write more functional software without too much front-end work.

## Running the Program
Go Notebook is very much under development. If you want to run the current build, you can clone the source and run the following command.

```
node index.js 
```

This will automatically create a board of 19 X 19 size. To create a board of a different size just add the size number to the end of the terminal command.

```
node index.js 13
```

This will create a board of 13 X 13 size.

---

**Disclaimer**

You will need to have `node` installed on your computer for this to work. Only MacOS users will get the emoji rendering to work correctly right now. Sorry! 

---

### Logging moves
Go Notebook currently starts with **black** and alternates between black and white, automatically switching stones and logging move #. There is no  functionality for logging passing/resigning at this time.

To log a move you need to type in the x,y position on the board into the terminal.

```
3,3
```

This will log a piece at the 3,3 interstion on the board. This board is calibrated from left to right, top to bottom. That is to say the 0,0 point sits on the top left hand corner.

