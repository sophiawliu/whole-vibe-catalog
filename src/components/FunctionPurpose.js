import './FunctionPurpose.css';
import Cover from './Cover';
import Menu from './Menu';
import Index from './Index';

function FunctionPurpose() {
    return (
        <div className="FunctionPurpose">
            <div className="page white">
                <h1 class="black-header">FUNCTION</h1>
                <p class="univers-reg">Your own WHOLE VIBE CATALOG functions as a curation and organization device. With it, the user should know better what is vibey and where and how those vibes come together.</p>
                <p class="univers-reg">Items are listed in the CATALOG if they are deemed:</p>
                <ol class="univers-reg">
                    <li class="univers-reg">Easily vibed to.</li>
                    <li class="univers-reg">Aesthetic as media,</li>
                    <li class="univers-reg">Relevant to cultural education,</li>
                    <li class="univers-reg">The user's favorite things,</li>
                    <li class="univers-reg">High or low in popularity or coolness,</li>
                </ol>
                <p class="univers-reg">This information is continually revised according to the experience of the naturally intelligent CATALOG user.</p><br></br>
                <h1 class="black-header">PURPOSE</h1>
                <p class="univers-reg">We are as gods and might as well get good at it. So far, remotely done power and glory—as via black box and attention-greedy algorithms—has succeeded to the point where humans are followers and gross defects obscure actual gains. In response to this dilemma and to these gains a realm of intimate, personal power is developing—power of the individual to conduct their own education, find their own inspiration, shape their own environment, and share their adventure with whoever is interested. Vibes that aid this process are sought and promoted by your own WHOLE VIBE CATALOG.</p>
            </div>
            <Menu prevPage={<Cover></Cover>} nextPage={<Index></Index>} arrowColor='black' topMenuColor='black'></Menu>
        </div>
  );
}

export default FunctionPurpose;
