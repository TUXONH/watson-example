//////////////////////////////////////
/////        watson test          ////
//////////////////////////////////////

const dotenv = require( 'dotenv');
dotenv.config()
const ConversationV1 = require( 'watson-developer-cloud/conversation/v1');

const conversation = new ConversationV1({
    "url": "https://gateway.watsonplatform.net/assistant/api",
    "username": "e5c63eae-c8e6-4231-8389-9c6f9124a328",
    "password": "k2ubQ6B7MaXa",
    "version_date": ConversationV1.VERSION_DATE_2016_09_20 
 });

conversation.message({
	input: {
		text: ' '
	},
  workspace_id: "ae25ea1c-b44c-46bd-b903-1d64eecbb082"
}, function(err, response) { 
  if (err) {
	console.error(err);
  } else {
console.log(JSON.stringify(response, null, 2));
  }
});