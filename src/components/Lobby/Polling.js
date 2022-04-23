import React, {useState, useEffect} from "react";
import "./Polling.css";
import Poll from 'react-polling';

const pollQ = "Are you understanding the lecture?";
const answers = [
    { option : "Yes", votes: 6}, 
    { option: "No", votes: 3}, 
    { option: "Somewhat", votes:5}
];

const FakePoll = () => {

    const [pollAnswers, setPollAnswers] = useState([...answers]);

    const[voteData, setVoteData] = useState();
    const[totalVotes, setTotalVotes] = useState(0);
    const[voted, setVoted] = useState(false);


    const handleVote = (voteAnswer) => {
        setPollAnswers((pollAnswers) =>
          pollAnswers.map((answer) =>
            answer.option === voteAnswer
              ? {
                  ...answer,
                  votes: answer.votes + 1
                }
              : answer
          )
        );
      };

      return (
        <div>
          <Poll
            noStorage
            question={pollQ}
            answers={pollAnswers}
            onVote={handleVote}
          />
        </div>
      );
}

export default Poll