

import "./about.css";

const About = () => {

        const exercise = () => {
            console.log("test test test");

            const ages = [13,45,74,12,78,23,56,33,72,62,46,18,3,93,10];
            let total=0;
            for(let i=0; i< ages.length; i++) {
                let num=ages[i];
                total += num;
            }

            console.log("the sum is:", total);

        };

    return (
            <div ClassName="about-page">
                <h1>My Online Store</h1>
                <h5>Created by: Caleb Bituin</h5>

                <button onClick={exercise}>Do the magic!</button>
            </div>
    );
};

export default About;