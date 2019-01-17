

main();

function main()
{

    //problem1();
    problem2();
    // problem3();
    console.log(callByNickname(josh));

}
console.log(callByNickname(katie));

//Put the start of your program in a main function.
// Create a class for a bank account user.
// Include name, address, and account balance.
// Create a function that can change the account balance.
// It WILL NOT be changed if you log it.

/*
class will build it with whatever name

didn't want us to add anything or call the function

 */


// function problem1()
// {
//     class regions
//     {
//         constructor(name, address, accountBalance)
//         {
//             this.name = name;
//             this.address = address;
//             this.accountBalance = accountBalance;
//
//         }
//
//         withdraw(amount)
//         {
//             return this.accountBalance -= amount;
//         }
//
//     }
// }

//Put the start of your program in a main function.
// Create 5 key/value pairs for names and nicknames.
// Create a function that calls the person's name key to get the nickname value.
// You should be able to call your function from your main function.

/*
key equals the name you assign for the value
you can just build it, you can build an object into an array
you can build a class and build the function to call into the class
you can build an array with the object and call a specific name for the nickName
to call from main you would have to put it in a scope that main can see



 */





function problem2()
{
    var thomas= {name: "Thomas" ,nickName:"tom"};
    var john= {name:"John" ,nickName:"jo"};
    var josh= {name:"Josh" ,nickName:"rick"};
    var katie= {name:"Katie" ,nickName:"kat"};
    var joseph= {name:"Joseph" ,nickName:"JOJO"};
    //
    function callByNickname(person)
    {
        return person.nickName
    }
    console.log(thomas.nickName);
    console.log(callByNickname(john));

    // class People
    // {
    //     constructor(name,nickname)
    //     {
    //         this.name = name;
    //         this.nickname =nickname;
    //     }
    //     callByNickName(person)
    //     {
    //         return person.nickname
    //     }
    // }
    //
    // var thomas = new People("thomas","tom")


}




//Put the start of your program in a main function.
// Create a two player game.
// Ask the first player to "Enter a number".
// The second player has to guess the number until they get the right number.
// After each guess let them know if they should go higher or lower.

/*
using LET inside the function works but using LET for player two means that [WHILE] won't see it

 */


function problem3()
{

    let playerOne = prompt("Give player Two a number. No spaces!");

        do
            {
                var playerTwo =prompt("Player Two, Guess player ones number.");

                if(playerTwo === playerOne)
                {
                    console.log("GOOD JOB!");
                    break
                }
                else if (playerTwo > playerOne)
                {
                    console.log("That's too high!");
                }
                else if(playerTwo < playerOne)
                {
                    console.log("That's too low!");
                }

            }
        while(playerTwo !== playerOne);


}