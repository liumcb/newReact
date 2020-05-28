const apiConfig={
	'development':{
		'base':'https://biz-dev.miaogoche.cn'
	},
	'production':{
		'base':'https://biz.miaogoche.cn'
	}
}
const env=process.env.NODE_ENV==undefined?'development':process.env.NODE_ENV;
console.log('process=',process.env);

const baseUrl = apiConfig[env].base;

export const ApiConfig = {
	'dictCodePage': baseUrl + '/dictCode/findPage' //首页-城市列表
}

