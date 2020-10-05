const chapters = {
    '1': {
        title: '',
        image: 'clouds-bottom.png',
        text: 'Our story takes us to a world where your wildest fantasies exists, dragons, demons, werewolves, fairies, you name it. A weary traveler named Saf and his travels will be our main focus. Our hero is desperately trying to find a way to revive his lost loved one, his dear Plaboni and heard about a man in the City of Dreams that is known for recently bringing dead people back to life, little does our traveler know that he is about to be hit with a blast from the past..... Make The Choice For Saf',
        decisions: [
            {
                page: 2,
                choice: 'Enter City (Tavern)'
            },
            {

                choice: 'Turn Back',
                rollCredits: true
            }
        ]
    },
    '2': {
        title: '',
        text: 'Our hero enters a busy tavern for a drink and to see if he can get some information on this obscure man who apparently can revive people. Our traveler sits down at the bar next to a grizzly man wearing dark colors and baggy clothing. ',
        decisions: [
            {
                page: 3,
                choice: 'Order A Drink'
            },
            {
                page: 5,
                choice: 'Eavesdrop on Conversations'
            }
        ]


    },
    '3': {
        title: '',
        counter: 0,
        maxVisit: 3,
        postCredit: 6,
        text: 'The bartender slide you a strong drink across the bar and you down it like water.....What do you say? Order another drink? ',
        decisions: [
            {
                page: 3,
                choice: 'Order A Drink'
            },
            {
                page: 5,
                choice: 'Eavesdrop on Conversations'
            },


        ]


    },
    '6': {
        title: '',
        text: "You've had one too many drinks and developed alcoholism due to your depressive state of mind, because of this you will never revive your lost love and waste your life away in that tavern, thanks for playing",
        decisions: [{
            choice: 'End Game',
            rollCredits: true
        }]
    },
    '5': {
        title: '',
        text: `While eavesdropping on multiple conversations he picks up on lots of talk about the townspeople scared of a vampire that’s been apparently seen moving around the streets at night. Growing restless of the talk of monsters, Saf asks the large bearded man next to him “Hey hairy, know anything about a man in this city who can bring the dead back into this world?"... The man replies "What did you call me?"`,
        decisions: [{
            page: 7,
            choice: "Aggressive Reply"
        }, {
            page: 8,
            choice: "Calm Reply"
        }]
    }, '7': {
        title: '',
        text: [`Saf replies "Listen man I'm not the kind of guy you want to mess with trust me now cut the macho man bullshit and tell me more about the damn guy`, `The man looks at Saf with a smirk and says “Well aint you a brave boy, you know what city you’re in?”`, `Saf solemnly looks at his drink and mutters to himself "Yes of course I know what city I'm in"`, `"W-wha-what did you say boy?" the man asks while stumbling over his words"`],
        decisions: [{
            page: 9,
            choice: "Try to get more info"
        }, {
            page: 10,
            choice: "Go out & find your own info"
        }]
    }, '8': {
        title: '',
        text: [`Acting flustered Saf replies "Oh man sorry I've just had a long day traveling, and no offense to you about the hair ahaha I wish I could grow a beard myself"..... The mans expression immediately changes and he replies with a hearty laugh and says "Well kid you look a little lost do you know what city your in? you gotta watch your tone around here"....`, `Saf solemnly looks at his drink and mutters to himself "Yes of course I know what city I'm in"`, `"W-wha-what did you say boy?" the man asks while stumbling over his words"`],
        decisions: [{
            page: 9,
            choice: "Try to get more info"
        }, {
            page: 10,
            choice: "Go out & find your own info"
        }]
    }, '9': {
        title: '',
        text: [`Saf's patience is running out and  slams his drink on the bar and the tavern culls to a dead silence, noticing the change in atmosphere and all the eyes drilling into the back of his head he gives out a hiccup in hopes to play it off as a drunken mistake and then asked the bearded man again "So do you have any info on this dead people talk or am I wasting my time?"`,`The man replies "Well kiddo I don't know anything about that try going down to the slums that usually where these ghost stories come from"`, `Saf can tell the man isn't taking him seriously so he decides to leave`],
        decisions: [{
            page: 10,
            choice: "Pay for your drink and leave"
        }, {
            page: 11,
            choice: "Leave without paying"
        }]
    }, '10': {
        title: '',
        text: [`Growing restless Saf downs the rest of his drink throws some coins on the bar and walks out into the night. As Saf walks towards the local hostel he witnesses a fight break out between a group of guards and one old man. Saf thinks to himself not my problem and I have other business to do here. One thing that did grab Saf’s attention was that this man was winning this fight and even Saf couldn’t track his movements, it’s as if he was literally teleporting around the alley throwing punches left and right. The elderly man is suddenly caught by a stray bullet and falls to the ground."Oh brother" Saf thinks to himself while sucking his teeth`],
        decisions: [{
            page: 12,
            choice: "Help the old man"
        }, {
            page: 13,
            choice: "Not my problem"
        }]
    }, '11': {
    title: '',
        text: [`Out of frustration and anger Saf neglects paying the bartender and walks towards the exit, Saf didnt notice as he was walking up to the exit two mammoth like men were blocking his path with their arms crossed`,`"You must not be from around here punk but in this bar you always pay your tab off" the two men state in unison`,`"Oh really?" Saf asks with a sly smirk on his face`],
        decisions: [{
        page: 16,
        choice: "Pay the tab, it's not worth it"
    }, {
        page: 17,
        choice: "Time to have some fun"
    }]
}, '12': {
        title: '',
        text: [`Saf quickly jumps into the alley throws the old man body over his shoulder and scans the situation for all options `],
        decisions: [{
            page: 14,
            choice: "There's too many make a run for it"
        }, {
            page: 15,
            choice: "These guards dont know who they're messing with"
        }]
    }, '13': {
        title: '',
        text: [`"This isn't my problem, I need to focus on bringing back Plaboni, damn it" as Saf walks away he can hear the old man screaming in agony as the guards start to stab him with their weapons. Saf can't help but think if his love were still alive and here she would be so disappointed, he decides to help the old man and jumps across the street into the alley in front of the mans helpless body. The guards are startled by Saf's inhuman speed and take a few steps back and ready their weapons`],
        decisions: [{
            page: 14,
            choice: "Grab the body and run"
        }, {
            page: 15,
            choice: "Give them a taste of their own medicine"
        }]
    }, '16': {
        title: '',
        text: [`There no time for games right now Saf decides to pay the men "Sorry if I inconvenienced you all, it must've slipped my mind, here's what I owe and then some for a token of good gesture" `, `The men seemed pleased with the money and step aside to let Saf leave.`],
        decisions: [{
            page: 14,
            choice: "Its getting late I gotta find a place to sleep"
        }, {
            page: 15,
            choice: "Go to the slums the bearded guy was talking about"
        }]
    }, '17': {
        title: '',
        text: [``],
        decisions: [{
            page: 17,
            choice: ""
        }, {
            page: 18,
            choice: ""
        }]
    }

}

export default {
    getChapter(id) {
        return chapters[id]
    }
}
