scripts['myActions/myActions.js']= (function createMyActions () {

    const _actions = {}

    window.addEventListener('click', function myActionsClickListener (event) {
        const target = event.target
        const dataset = target.dataset
        
        if(dataset.act){
            
            if(typeof _actions[dataset.act] != "function" ){
                throw('myActions - No action registered for this key: ' + dataset.act)
            }
            
            _actions[dataset.act](dataset, target)
        }
            
    })

    const module = {}

    module.add = function myActions_Add (objOrStr, fun) {   
        if(typeof objOrStr == "string") {
            const key = objOrStr
            _actions[key] = fun
            return
        }

        var actionsObj = objOrStr

        var arrayOfKeys = Object.keys(actionsObj)

        arrayOfKeys.forEach(key => {
            _actions[key] = actionsObj[key]
        })
    }
    
    module.remove = function myActionsRemove (objOrStr) {
        if(typeof objOrStr == "string") {
            const key = objOrStr
            _actions[key] = null
            return
        }

        var actionsObj = objOrStr

        var arrayOfKeys = Object.keys(actionsObj)

        arrayOfKeys.forEach(key => {
            _actions[key] = null
        })
    }

    module.call = function myActionsCall (keyStr) {
        if(_actions[keyStr]){
            _actions[keyStr]()
        }
    }

    return module

})()