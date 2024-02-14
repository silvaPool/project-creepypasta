// import 'hermes-wc/src/style.css';
// import { DiscordSubmissionAdapter } from 'hermes-wc/src/submission-adapters/discord.js'
// import { initializeHermesForm } from 'hermes-wc/src/index.js'


// const cleanup = initializeHermesForm({
//     submissionAdapters: [new DiscordSubmissionAdapter({
//         webhookUrl: 'your webhook url'
//     })],
//     submissionCompleteCallback: (response) => {

//     }
// })

// cleanup()

// function FeedBack() {
    
//     return (
//         <hermes-wrapper>
//             <form className='hermes-stack' data-hermes="form">
//                 <sl-input
//                   name="feedback"
//                   label="Feedback"
//                   placeholder="e.g., Not clear enough"
//                 ></sl-input>
//                 <hermes-score-input
//                     name="score"
//                     label="score"
//                     score-count="5"
//                     start-helper-text="Low Score"
//                     end-helper-text="High score"
//                 ></hermes-score-input>
//                 <div className='hermes-row'>
//                     <sl-button data-hermes="close">Close</sl-button>
//                     <sl-button variant="primary" type="submit">Submit</sl-button>
//                 </div>
//             </form>
//         </hermes-wrapper>
//     )
// }

// export default FeedBack;