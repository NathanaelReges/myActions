scripts['myActions/testMyActions.js']= function testMyActions () {

    const myActions = scripts['myActions/myActions.js']



    const page = document.createElement('div')

    page.innerHTML = `
        <h1>Test Test Test Test Test Test</h1>
        <button id="but1" data-act="test1">MyActionsTest</button>
        <button id="but2" data-act="test2">MyActionsTest</button>
        <button id="but3" data-act="test3">MyActionsTest</button>
        <button id="but4" data-act="test4">MyActionsTest</button>
        <button id="but5" data-act="test5">MyActionsTest</button>
        <p>Test Test Test Test Test Test</p>
    `

    document.body.append(page)

    let test1 = false,
    test2 = false,
    test3 = false



    

    
    myActions.add('test1', ()=>{
        test1 = true
    })

    myActions.add({
        'test2'() {
            test2 = true
        },
        'test3'() {
            test3 = true
        }
    })

    const actionsObj =  {
        'test4'() {
            test4 = true
        },
        'test5'() {
            test5 = true
        }
    }

    myActions.add(actionsObj)
    


    requestAnimationFrame(()=>{
        ['but1', 'but2', 'but3', 'but4', 'but5'].forEach(fireClickOn);   

        ['test1', 'test2', 'test3', 'test4', 'test5'].forEach(testThisFlag)

        requestAnimationFrame(()=>{
            myActions.remove(actionsObj)
            myActions.remove('test1')
            console.log('Now you should see errors for test1, test4 and test5.');
            ['but1', 'but4', 'but5'].forEach(fireClickOn);   
        })
    })
 







    function testThisFlag(str) {
        if([str] == false) {
            throw str + " flag isn't OK"
        }
        else {
            console.log(str + " flag is OK")
        }
    }


   
    function fireClickOn (id) {
        const butEle = page.querySelector('#' + id)
        simulateClick(butEle)
    }



    function simulateClick (ele) {
        var event = new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
            view: window
        });

        ele.dispatchEvent(event);
    }
}