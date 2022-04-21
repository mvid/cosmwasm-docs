"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5262],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return p}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=c(n),p=o,m=u["".concat(l,".").concat(p)]||u[p]||d[p]||i;return n?a.createElement(m,r(r({ref:t},h),{},{components:n})):a.createElement(m,r({ref:t},h))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5314:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return h},default:function(){return u}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=["components"],s={title:"Idea behind an Actor Model"},l="Idea behind an Actor Model",c={unversionedId:"actor-model/idea",id:"actor-model/idea",title:"Idea behind an Actor Model",description:"The actor model is the solution to the problem of communication between smart",source:"@site/docs/05-actor-model/01-idea.md",sourceDirName:"05-actor-model",slug:"/actor-model/idea",permalink:"/docs/1.0/actor-model/idea",editUrl:"https://github.com/InterWasm/docs/edit/main/docs/05-actor-model/01-idea.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Idea behind an Actor Model"},sidebar:"docsSidebar",previous:{title:"Integration",permalink:"/docs/1.0/integration"}},h=[{value:"The problem",id:"problem",children:[],level:2},{value:"The Actor",id:"actor",children:[],level:2},{value:"The Action",id:"action",children:[],level:2},{value:"Multi-stage Actions",id:"multi-stage",children:[],level:2},{value:"State",id:"state",children:[],level:2},{value:"Queries",id:"queries",children:[],level:2},{value:"Wrapping everything together - transactional call flow",id:"flow",children:[],level:2},{value:"Different ways of handling responses",id:"responses",children:[],level:2}],d={toc:h};function u(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"idea-behind-an-actor-model"},"Idea behind an Actor Model"),(0,i.kt)("p",null,"The actor model is the solution to the problem of communication between smart\ncontracts. Let's take a look at the reasons why this particular solution is\nchosen in CosmWasm, and what are the consequences of that."),(0,i.kt)("h2",{id:"problem"},"The problem"),(0,i.kt)("p",null,"Smart contracts can be imagined as sandboxed microservices. Due to SOLID\nprinciples it is valuable to split responsibilities between entities.\nHowever, to split the work between contracts themselves, there is a need\nto communicate between them, so if one contract is responsible for\nmanagement group membership, it is possible to call its functionality\nfrom another contract."),(0,i.kt)("p",null,"The traditional way to solve this problem in SW engineering is to\nmodel services as functions that would be called with some RPC\nmechanism, and return its result as a response. Even though this approach\nlooks nice, it creates sort of problems, in particular with shared state\nconsistency."),(0,i.kt)("p",null,'The other approach which is far more popular in business level modelling\nis to treat entities as actors, which can perform some task, but without\ninterrupting it with calls to other contracts. Any calls to other contracts can\nbe called only after the whole execution is performed. When\n"subcall" would be finished, it will call the original contract back.'),(0,i.kt)("p",null,"This solution may feel unnatural, and it requires to kind of\ndifferent design solutions, but it turns out to work pretty well for\nsmart contracts execution. I will try to explain how to reason about it,\nand how it maps to contract structure step by step."),(0,i.kt)("h2",{id:"actor"},"The Actor"),(0,i.kt)("p",null,"The most important thing in the whole model is an Actor itself. So\nwhat is this? The Actor is a single instantiation of a contract,\nwhich can perform several actions. When the actor finishes his job,\nhe prepares a summary of it, which includes the list of things\nthat have to be done, to complete the whole scheduled task."),(0,i.kt)("p",null,'An example of an actor is the Seller in the KFC restaurant. The first\nthing you do is order your BSmart, so you are requesting\naction from him. So from the system user, you can think\nabout this task as "sell and prepare my meal", but the\naction performed by the seller is just "Charge payment and create\norder". The first part of this operation is to create a bill and\ncharge you for it, and then it requests the Sandwich and Fries\nto be prepared by other actors, probably chefs. Then when the chef\nis done with his part of the meal, he checks if all meals are ready.\nIf so, it calls the last actor, the waiter, to deliver the food\nto you. At this point, you can receive your delivery, and the task\nis considered complete.'),(0,i.kt)("p",null,"The above-described workflow is kind of simplified. In\nparticular - in a typical restaurant, a waiter would observe the\nkitchen instead of being triggered by a chef, but in the Actor model,\nit is not possible. Here, entities of the system are passive\nand cannot observe the environment actively - they only react to\nmessages from other system participants. Also in KFC, the seller\nwould not schedule subtasks for particular chefs, instead, he\nwould leave tasks to be taken by them, when they are free. It\nis not the case, because as before - chefs cannot actively listen\nto the environment. However, it would be possible to create a contract\nfor being a chefs dispatcher which would collect all orders from\nsellers, and balance them across chefs for some reason."),(0,i.kt)("h2",{id:"action"},"The Action"),(0,i.kt)("p",null,'Actors are the model entities, but to properly communicate with\nthem, we need some kind of protocol to communicate with them.\nEvery actor is capable of performing several actions. In my\nprevious KFC example, the only action seller can do is "Charge\npayment and create order". However, it is not always the case -\nour chefs were proficient with performing both "Prepare fries"\nand "Prepare Sandwich" actions - and also many more.'),(0,i.kt)("p",null,"So when we want to do something in an actor system, we schedule\nsome action to the actor being the closest to us, very often with\nsome additional parameters (as we can pick if we want to exchange\nfries with salad)."),(0,i.kt)("p",null,'However, naming the action after the exact thing which happened\nin the very contract would be misleading. Take a look at the KFC\nexample once again. As I mentioned, the action performed by a seller\nis "Charge payment and create order". The problem is, that for\nthe client which schedules this action, it doesn\'t matter what\nexactly is the responsibility of the actor himself - what the client is\nscheduling is "Prepare Meal" with some description\nof what exactly to prepare. So we can say, that the action is\nthe thing performed by the contract itself, plus all the sub-actions it\nschedules.'),(0,i.kt)("h2",{id:"multi-stage"},"Multi-stage Actions"),(0,i.kt)("p",null,"So as the whole idea makes some sense, there is the problem created by the actor\nmodel: what if I want to perform some action in my contract, but to completely\nfinalize some steps, the contract has to make sure that some sub-action he\nscheduled are finished?"),(0,i.kt)("p",null,"Imagine, that in the previous KFC situation there is no dedicated\nWaiter, instead Seller is serving you meal when Chefs finished\ntheir job."),(0,i.kt)("p",null,"This kind of pattern is so important and common, that in CosmWasm\nwe developed a special way to handle it, which is dedicated ",(0,i.kt)("inlineCode",{parentName:"p"},"Reply"),"\naction."),(0,i.kt)("p",null,"So when Seller is scheduling actions for chefs, he assigns some\nnumber to this action (like order id) and passes it to chefs.\nHe also remembers how many actions he scheduled for every order id.\nNow every time chef is finished with his action, he would call the\nspecial ",(0,i.kt)("inlineCode",{parentName:"p"},"Reply")," action on Seller, in which he would pass back the\norder id. Then Seller would decrease the number of actions left for\nthis order, and if it reached zero, he would serve a meal."),(0,i.kt)("p",null,"Now you can say, that the ",(0,i.kt)("inlineCode",{parentName:"p"},"Reply")," action is completely not needed,\nas Chefs could just schedule any arbitrary action on Seller, like\n",(0,i.kt)("inlineCode",{parentName:"p"},"Serve"),", why there is the special ",(0,i.kt)("inlineCode",{parentName:"p"},"Reply")," for? The reason is\nabstraction and reusability. The Chefs task is to prepare a meal,\nand that is all. There is no reason for him to know why he is\neven preparing Fries - if it is part of the bigger task (like order\nfor a client), or the seller is just hungry. It is possible,\nthat not only the seller is eligible to call the chef for food - possibly\nany restaurant employee can do that just for themselves. Therefore,\nwe need a way, to be able to react an actor finishing his job in\nsome universal way, to handle this situation properly in any context."),(0,i.kt)("p",null,"It is worth noting, that the ",(0,i.kt)("inlineCode",{parentName:"p"},"Reply")," can contain some additional data.\nThe id assigned previously is the only required information in the\n",(0,i.kt)("inlineCode",{parentName:"p"},"Reply")," call, but the actor can pass some additional data - ",(0,i.kt)("inlineCode",{parentName:"p"},"events"),"\nemitted, which are mostly metadata (to be observed by non-blockchain\napplications mostly), and any arbitrary data it wants to pass."),(0,i.kt)("h2",{id:"state"},"State"),(0,i.kt)("p",null,"Up until this point, we were considering actors as entities performing\nsome job, like preparing the meal. If we are considering computer\nprograms, such a job would be to show something on the screen, maybe\nprint something. This is not the case with Smart Contracts. The only\nthing which can be affected by the Smart Contract is their internal\nstate. So the state is arbitrary data that is kept by the contract.\nPreviously in the KFC example I mentioned, that Seller is keeping in mind\nhow many actions he scheduled for chefs are not yet finished - this\nnumber is part of the Seller's state."),(0,i.kt)("p",null,"To give a more realistic example of a contract state, let's think about a more\nreal-life Smart Contract than the restaurant. Let's imagine we want\nto create our currency - maybe we want to create some smart\ncontracts-based market for some MMORPG game. So we need some way,\nto be able to at least transfer currency between players. We can\ndo that, by creating the contract we would call ",(0,i.kt)("inlineCode",{parentName:"p"},"MmoCurrency"),",\nwhich would support the ",(0,i.kt)("inlineCode",{parentName:"p"},"Transfer")," action to transfer money to another\nplayer. Then what would be the state of such a contract? It would be\njust a table mapping player names to the amount of currency they own. The\ncontract we just invited exists in CosmWasm examples, and it\nis called ",(0,i.kt)("inlineCode",{parentName:"p"},"cw20-base")," contract (it is a bit more complicated, but\nit is its core idea)."),(0,i.kt)("p",null,"And now there is a question - how is this helpful to transfer currency\nif I cannot check how much of it I own? It is a very good\nquestion, and the answer to that is simple - the whole state of every\ncontract in our system is public. It is not universal for\nevery Actor model, but it is how it works in CosmWasm, and it is\nkind of forced by the nature of blockchain. Everything happening in\nblockchain has to be public, and if some information should be hidden,\nit has to be stored indirectly."),(0,i.kt)("p",null,"There is one very important thing about the state in CosmWasm, and it is\nthe state being transactional. Any updates to the state are not applied immediately,\nbut only when the whole action succeeds. It is very important, as\nit guarantees that if something goes wrong in the contract, it is always\nleft in some proper state. Let's consider our ",(0,i.kt)("inlineCode",{parentName:"p"},"MmoCurrency")," case. Imagine,\nthat in ",(0,i.kt)("inlineCode",{parentName:"p"},"Transfer")," action we first increase the receiver currency amount\n(by updating the state), and only then do we decrease the sender amount.\nHowever, before decreasing it, we need to check if a sender\npossesses enough funds to perform the transaction. In case we realize,\nthat we cannot do it, we don't need to do any rolling back by hand -\nwe would just return a failure from the action execution, and the state\nwould not be updated. So when in contract state is updated,\nit is just a local copy of this state being altered, but the\npartial changes would never be visible by other contracts."),(0,i.kt)("h2",{id:"queries"},"Queries"),(0,i.kt)("p",null,"There is one building block in CosmWasm approach to the Actor model, which\nI didn't yet cover it. As I said, the whole state of every contract is public\nand available for everyone to look at. The problem is, that this way of\nlooking at state is not very convenient - it requires users of contracts\nto know its internal structure, which kind of violates the SOLID rules\n(Liskov substitution principle in particular). If for example contract\nis updated and its state structure changes a bit, another contract looking\nat its state would just nevermore work. Also, it is often the case, that\nthe contract state is kind of simplified, and information that is relevant\nto the observer would be calculated from the state."),(0,i.kt)("p",null,"This is where queries come into play. Queries are the type of messages to\ncontract, which does not perform any actions, so do not update any state,\nbut can return an answer immediately."),(0,i.kt)("p",null,'In our KFC comparison, the query would be if Seller goes to Chef to ask\n"Do we still have pickles available for our cheeseburgers"? It can be\ndone while operating, and response can be used in it. It is\npossible because queries can never update their state, so they do not need\nto be handled in a transactional manner.'),(0,i.kt)("p",null,"However, the existence of queries doesn't mean, that we cannot look at the contract's\nstate directly - the state is still public, and the technique of looking at them\ndirectly is called ",(0,i.kt)("inlineCode",{parentName:"p"},"Raw Queries"),". For clarity, non-raw queries are sometimes\ndenoted as ",(0,i.kt)("inlineCode",{parentName:"p"},"Smart Queries"),"."),(0,i.kt)("h2",{id:"flow"},"Wrapping everything together - transactional call flow"),(0,i.kt)("p",null,'So we touched on many things here, and I know it may be kind of confusing.\nBecause of that, I would like to go through some more complicated calls\nto CosmWasm contract to visualize what the "transactional state" means.'),(0,i.kt)("p",null,"Let's imagine two contracts:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"MmoCurrency")," contract mentioned before, which can perform ",(0,i.kt)("inlineCode",{parentName:"li"},"Transfer"),"\naction, allowing to transfer some ",(0,i.kt)("inlineCode",{parentName:"li"},"amount")," of currency to some ",(0,i.kt)("inlineCode",{parentName:"li"},"receiver"),"."),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"WarriorNpc")," contract, which would have some amount of our currency,\nand he would be used by our MMO engine to pay out the reward for some\nquest player could perform. It would be triggered by ",(0,i.kt)("inlineCode",{parentName:"li"},"Payout")," action,\nwhich can be called only by specific client (which would be our game\nengine).")),(0,i.kt)("p",null,"Now here is an interesting thing - this model forces us, to make our MMO\nmore realistic in terms of the economy that we traditionally see - it is\nbecause ",(0,i.kt)("inlineCode",{parentName:"p"},"WarriorNpc")," has some amount of currency, and cannot create\nmore out of nothing. It is not always the case (the previously mentioned\n",(0,i.kt)("inlineCode",{parentName:"p"},"cw20")," has a notion of Minting for this case), but for sake of simplicity\nlet's assume this is what we want."),(0,i.kt)("p",null,"To make the quest reasonable for longer, we would make a reward for it\nto be always between ",(0,i.kt)("inlineCode",{parentName:"p"},"1 mmo")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"100 mmo"),", but it would be ideally\n",(0,i.kt)("inlineCode",{parentName:"p"},"15%")," what Warrior owns. This means, that the quest would be worth\nless for every subsequent player, until Warrior would be broke, left\nwith nothing, and will no longer be able to payout players."),(0,i.kt)("p",null,"So what would the flow look like? The first game would send a ",(0,i.kt)("inlineCode",{parentName:"p"},"Payout")," message\nto the ",(0,i.kt)("inlineCode",{parentName:"p"},"WarriorNpc")," contract, with info on who should get the reward. Warrior\nwould keep track of players who fulfilled the quest, to not pay out\nthe same person twice - there would be a list of players in his state.\nFirst, he would check the list looking for players to pay out - if he is\nthere, he would finish the transaction with an error."),(0,i.kt)("p",null,"However, in most cases the player would not be on the list - so then ",(0,i.kt)("inlineCode",{parentName:"p"},"WarriorNpc"),"\nwould add him to the list. Now the Warrior would finish his part of\nthe task, and schedule the ",(0,i.kt)("inlineCode",{parentName:"p"},"Transfer")," action to be performed by ",(0,i.kt)("inlineCode",{parentName:"p"},"MmoCurrency"),"."),(0,i.kt)("p",null,"But there is the important thing - because ",(0,i.kt)("inlineCode",{parentName:"p"},"Transfer")," action is actually\nthe part of the bigger ",(0,i.kt)("inlineCode",{parentName:"p"},"Payout")," flow, it would not be executed on the original\nblockchain state, but on the local copy of it, which has already applied\nthe player's list. So if the ",(0,i.kt)("inlineCode",{parentName:"p"},"MmoCurrency")," would for any reason take a look\nof ",(0,i.kt)("inlineCode",{parentName:"p"},"WarriorNpc")," internal list, it would be already updated."),(0,i.kt)("p",null,"Now ",(0,i.kt)("inlineCode",{parentName:"p"},"MmoCurrency")," is doing its job, updating the state of Warrior and\nplayer balance (note, that our Warrior is here just treated as another player!).\nWhen it finishes, two things may happen:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"There was an error - possibly Warrior is out of cash, and it can nevermore\npay for the task. In such case, none of the changes - neither updating the list\nof players succeeding, nor balance changes are not applied to the original\nblockchain storage, so they are like never happened. In the database world, it\nis denoted as rolling back the transaction."),(0,i.kt)("li",{parentName:"ol"},"Operation succeed - all changes on the state are now applied to blockchain,\nand any further observation of ",(0,i.kt)("inlineCode",{parentName:"li"},"MmoCurrency")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"WarriorNpc")," by external\nthe world would see updated data.")),(0,i.kt)("p",null,"There is one problem - in this model, our list is not a list of players\nwho fulfilled the quest (as we wanted it to be), but the list of players\npaid out (as in transfer failure, the list is not updated). We can do better."),(0,i.kt)("h2",{id:"responses"},"Different ways of handling responses"),(0,i.kt)("p",null,"Note, that we didn't mention a ",(0,i.kt)("inlineCode",{parentName:"p"},"Reply")," operation at all. So why it was not\ncalled by ",(0,i.kt)("inlineCode",{parentName:"p"},"MmoCurrency")," on ",(0,i.kt)("inlineCode",{parentName:"p"},"WarriorNpc"),"? The reason is, that this operation\nis optional. When scheduling sub-actions on another contract we may choose\nwhen ",(0,i.kt)("inlineCode",{parentName:"p"},"Reply")," how the result should be handled:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Never call ",(0,i.kt)("inlineCode",{parentName:"li"},"Reply"),", action succeed regardless of the result"),(0,i.kt)("li",{parentName:"ol"},"Never call ",(0,i.kt)("inlineCode",{parentName:"li"},"Reply"),", succeed only if sub-action succeeded"),(0,i.kt)("li",{parentName:"ol"},"Call ",(0,i.kt)("inlineCode",{parentName:"li"},"Reply")," on success"),(0,i.kt)("li",{parentName:"ol"},"Call ",(0,i.kt)("inlineCode",{parentName:"li"},"Reply")," on failure"),(0,i.kt)("li",{parentName:"ol"},"Always call ",(0,i.kt)("inlineCode",{parentName:"li"},"Reply"))),(0,i.kt)("p",null,"So if we do not request ",(0,i.kt)("inlineCode",{parentName:"p"},"Reply")," to be called by subsequent contract, it will\nnot happen. I silently assumed, that the sub-call is performed in mode ",(0,i.kt)("inlineCode",{parentName:"p"},"2"),',\nso if the sub-call fails, the whole action would fail. But it is possible to\njust schedule some additional "optional" actions, which result doesn\'t\nmatter so much. Obviously in case such sub call fails, only\nchanges done by the original action would be stored on a blockchain, and all\nchanges created by the sub-call would be rolled back (so the sub-contract\nnever ends up in an improper state). It is probably a bit complicated for now,\nbut I promise it would be simple when you would do some practice with that.'),(0,i.kt)("p",null,"Now let's take a look at handling results with ",(0,i.kt)("inlineCode",{parentName:"p"},"3"),"-",(0,i.kt)("inlineCode",{parentName:"p"},"5")," options. It is actually\ninteresting, that using ",(0,i.kt)("inlineCode",{parentName:"p"},"3"),", even if the transaction is performed by sub-call\nsucceed, we may now take a look at the data it returned with ",(0,i.kt)("inlineCode",{parentName:"p"},"Reply"),", and\non its final state after it finished, and we can still decide,\nthat action as a whole is a failure, in which case everything would\nbe rolled back - even currency transfer performed by external contract."),(0,i.kt)("p",null,"In particular, an interesting option is ",(0,i.kt)("inlineCode",{parentName:"p"},"4"),". So if the contract would call\n",(0,i.kt)("inlineCode",{parentName:"p"},"Reply")," on failure, we can decide to claim success, and commit a\ntransaction on the state if the sub call failed. Why it may be relevant\nfor us? Possibly because our internal list was supposed to keep the list of\nplayers succeeding with the quest, not paid out! So if we have no more currency,\nwe still want to update the list! So we can choose to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"4")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," response\nhandling method, to ensure that failure in the transfer would not discard\nthe whole transaction."),(0,i.kt)("p",null,"But if we could use ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," for that, why is ",(0,i.kt)("inlineCode",{parentName:"p"},"4")," exist? It is useful sometimes.\nProbably the most common cause is that in case of failure, we want to leave\na note about it. Also, it is possible, that we want to succeed only on\nparticular types of failure, but it is a way less likely case - unfortunately\nfailure of the contract is denoted in CosmWasm only by some arbitrary string,\nso distinguishing failure reason would require parsing this string,\nand it would be difficult to maintain this kind of contract."),(0,i.kt)("p",null,"In the end, you can see, that performing actions in CosmWasm is built\nwith hierarchical state change transactions. The sub-transaction can be\napplied to the blockchain only if everything succeeds, but in case that\nsub-transaction failed, only its part may be rolled back, end other\nchanges may be applied. It is very similar to how most database\nsystems work."))}u.isMDXComponent=!0}}]);