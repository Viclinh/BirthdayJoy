import { board, calculateWinner, squarify } from 'public/app-logic.js'
import { autorun, observable } from 'mobx';
import { sendData } from 'backend/realtime';
import { subscribe, unsubscribe } from 'wix-realtime';
import wixWindow from 'wix-window';
import wixData from 'wix-data'; 


let state = observable ({
  	player: 'X',
 	board,
  	winner: null,
  	subscriptionId: null, // remove later
  	channel: { name: 'thisChannel' }
})

$w.onReady( function () {

	let a = Math.floor(Math.random() * 10 + 1);

    let guess = 1; 
    let num

    wixData.insert("Data", {
        num: $w('#input1').value
    })

$w('#button').onClick ((event) => {
  if (num = a)
    {
      console.log("Congrat! Your number matches the lucky number. You will get a secret item for your child. ");
    }

    else {
      console.log("Good luck next time!")
    }

}
    


// handle creation of new repeated items
  	//$w('#repeater1').onItemReady(($item, itemData) => {
    //	autorun(() => $item('#color').label = itemData.piece)
  //	});

// set the repeater data, triggering the creation of new items
//	autorun(() => $w("#repeater1").data = state.board)

//	subscribe( state.channel, handleMove)
//	.then((id) => {
//	  	state.subscriptionId = id
 //     	console.log(`${id} has joined the channel`);
//	})

//	$w('#square').onClick((event) => {
	// send move to subscribers
//		let data = {
//			context: event.context,
//			piece: state.player
//		}
//		sendMove(data)
//	})	
//});

//function turnover() {
// determine if someone won
//	let winner = calculateWinner(squarify(state.board))
 //   if (winner) {
 //     state.winner = winner;
 //     showWinner(state);
 //     return;
 //   }
// if nobody won, change player
 //   state.player === 'X' ? state.player = 'O' : state.player = 'X'
//}

//function showWinner(state) {
 // $w('#winnerBox').show()
//  $w('#winnerText').text = `${state.winner} wins!`
//  resetBoard(state);
//}

//const resetBoard = (state) => {
   // reset board state
 //  state.board.forEach((item) => { item.piece = "" })
   // enable square click
 //  $w("#repeater1").forEachItem(($item, itemData, index) => {
  //     $item("#square").enable()
  // })
//}

//export function resetButton_click(event) {
//	resetBoard(state)
//}

//export function closeButton_click(event) {
//	$w('#winnerBox').hide()
//}

// Start of Realtime Integration

//const sendMove = (move) => {
//	sendData('thisChannel', move).then(() => {
//		// displayMove()
//	}).catch(err => { console.error(err) })
//}

//const handleMove = ({ payload }) => {
// update board state
//	state.board[payload.data.context.itemId].piece = state.player 
// disable button on click
//	let $item = $w.at(payload.data.context)
//	$item("#square").disable()
// change turn
//	turnover()
//}

/**
*	Adds an event handler that runs when the element is clicked.
	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
*	 @param {$w.MouseEvent} event
*/
//export function button1_click(event) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 
