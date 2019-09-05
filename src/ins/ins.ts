// TypeScript file
/**
 * 
 * 单例工具
*/
module ins{
    var __insManager = {};
    export function setIns(key:string,obj:any){
        __insManager[key] = obj;
    }

    export function getIns(key:string){
        let res = __insManager[key];
        if(!!res)
        {
            return res;
        }else{
            return null;
        }
    }
}