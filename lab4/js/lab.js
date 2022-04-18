/**
 * Uno Card Game Program.
 *
 * Replication of the classic Uno card game without Wild or Special Cards.
 *
 * @author Maxton Lenox & Izetta Evans.
 * @since  4.18.2022
 */

// Generate Uno deck (Cards 1-9, red, yellow, green, or blue)
// Give each player 7 cards
// Place remaining cards face down to create a draw pile
// Turn over top card of the draw pile to begin discard pile
// Randomly select player to take first turn
// Check if player hand has any playable cards
    // If no
        // Player draws one card from draw pile
        // If drawn card can be played, add to discard pile
        // Next player’s turn, repeat from Step 6
    // If yes
        // Continue to next steps
// Ask player which card to play (user input)
// Validate user input
    // If card is same number OR same color
        // Place card in discard pile
        // If player has one card remaining in hand
            // Player must say UNO!
            // If another player says UNO! before current Player
                // Player must draw two cards from draw pile
        // If player has no cards remaining in hand
            // Player WINS
            // TERMINATE GAME
        // Next player's turn, repeat from Step 6
    // Else
        // Reject card
        // Ask player for another card
// Next player's turn, repeat from Step 6
