module tools {
	/*
	资源管理器
	*/
	export class ResourceManager {
		static get instace(){
			if(!!ins.getIns("ResourceManager") == false)
				 ins.setIns("ResourceManager",new ResourceManager())
			return <ResourceManager>ins.getIns("ResourceManager");
		}
		public constructor() {
		}
	}
}