day 1: press key and paly sound
    -windowm listen to the event 'keydown', then call the function playSound();
        1. if the audio cannot find the data-key, return;
        2. otherwise, add the class name 'playing' to the corresponding key in order to trigger the transform animation
    -collect all the keys and iterate over them if they were transitionend, remove the 'playing' to stop the animation.
    -function of audio: audio.currentTime; audio.play();
    -add classname: this.classList.add()/ this.classList.remove();
    -event: 'keydown'; 'transitionend'
    -propertyName: 'transform'
    -attribute: data-*


day 2: moving the clock hands
    -get the current date: Date();
    -getSeconds(), getHours(), getMinutes();
    -move the hands with style property: minhand.style.transform = `rotate(${degree}deg)`;
    -update the time every 1000s: setInterval(setDate,1000);

day 3: change picture space and filter with range control
    -controls are input html element: <input type="range" min="0" max="25" value="10" data-sizing="px">
    1. select all the input control and iterate over them, if there is a change in value, call the function to update that value
    2. set up the suffix for the change, update the new value to the variables created in css: document.documentElement.style.setProperty(`--${variable}`, this.value + suffix)

day 4: Array and its methods
    1. arr.filter()
    2.arr.map()
    3. arr.sort( return ) and ternary condition
    4. arr.reduce((total, currentObj) => {return total + (currentObj)})
    5. concatenation with methods, links.map(link => link.textContent).filter(streetName => streetName.includes('de));
    6. when obj is not an array obj, we can split() each item into variables: const [var1, var2] = item.split(' ')
    7. arr.reduce((obj, item)=>{
        obj can be an array, and we can check obj[item]
    })

day 5: css flexbox and animation
    1. this.classList.toggle('new class name'), toggle can do both function (classList.add + classList.remove)

day 6: new API fetch
    difference between var, let and const: https://www.educative.io/answers/difference-between-var-let-and-const-keyword-in-javascript
    