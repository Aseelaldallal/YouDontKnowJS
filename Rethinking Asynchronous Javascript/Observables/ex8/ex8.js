
// ============ SOLUTION 1 ===============//

// This solution seems fair and seems to work but there is subtelty here: setTimeout waits at least 5000 
// 'timeBetweenClicks' milliseconds. I.e, it could be waiting more. We need to change this.


// $(document).ready(function(){
// 	var $btn = $("#btn"),
// 		$list = $("#list");

//     let timeBetweenClicks = 5000;
//     let acceptingClicks = true;

//     let rsq = ASQ.react.of(); 

//     function respondToClick(evt) {
//         if(acceptingClicks) {
//             setTimeout(function() {
//                 acceptingClicks = true;
//             },timeBetweenClicks);
//             acceptingClicks = false;
//             rsq.push(evt);
//         }
//     }

// 	$btn.click(function(evt){
//         respondToClick(evt);
// 	});

//     rsq.then(function(v) {
//         $list.append("<li>Clicked!</li>");
//     })
    
// });


// ============ SOLUTION 2 ===============//

// Using SetInterval -- This might suffer from the same subtelety as above

// $(document).ready(function(){
// 	var $btn = $("#btn"),
// 		$list = $("#list");

//     let timeBetweenClicks = 2000;
//     let acceptingClicks = true;
//     let rsq = ASQ.react.of(); 
//     let evt = null;

//     setInterval(function() {
//         respondToClicks();
//     }, timeBetweenClicks)
    

//     function respondToClicks() {
//         if(evt) {
//             rsq.push(evt);
//             evt = null;
//         }
//     }

//     $btn.click(function(event) {
//         console.log(event);
//         evt = event;
//     })

//     rsq.then(function(v) {
//         $list.append("<li>Clicked!</li>");
//     })


// });

// ============ SOLUTION 3 ===============//

// This solution somewhat works, but there is a subtelty here: we're not waiting for 1000 seconds 
// AFTER the click


// $(document).ready(function() {

//     let $btn = $("#btn");
//     let $list = $("#list");

//     clicks = ASQ.react.of();
//     timer = ASQ.react.of();

//     let clicked = false;

//     setInterval(function() {
//         if(clicked) {
//             timer.push();
//             clicked = false;
//         }
//     }, 1000);

//     $btn.click(function(evt) {
//         clicked = true;
//         clicks.push(evt);
//     })

//     let rsq = ASQ.react.all(clicks, timer);

//     rsq.val(function() {
//         $list.append("<li>Clicked!</li>");
//     })

// })

// ============ SOLUTION 4 ===============//

// Nice and simple

// $(document).ready(function() {
    
//         let $btn = $("#btn");
//         let $list = $("#list");
    
//         clicks = ASQ.react.of();
    
//         let acceptClicks = true;
    
    
//         $btn.click(function(evt) {
//             if(acceptClicks) {
//                 clicks.push(evt);
//                 acceptClicks=false;
//             }
//             setTimeout(function() {
//                 acceptClicks = true;
//             },5000);
//         })
    
    
//         clicks.val(function() {
//             $list.append("<li>Clicked!</li>");
//         })
    
//     })

    // ============ SOLUTION 5 ===============//

    $(document).ready(function() {
        
            let $btn = $("#btn");
            let $list = $("#list");
        
            let clicks = ASQ.react.of();
            let msgs = ASQ.react.of();

            let latest;
        
            $btn.click(function(evt) {
                latest = evt;
            })

            setInterval(function() {
                if(latest) {
                    msgs.push("Clicked");
                    latest = null;
                }
            },3000);
        
            msgs.val(function(msg) {
                $list.append("<li>" + msg + "</li>");
            })
        
        })
    