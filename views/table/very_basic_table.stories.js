module.exports={
	name:'Very basic table',
	stories:[
		{
			name:'Default',
			slug:'default',
			args:{
				rows:[
					{
						name:'John',
						status:'Approved',
						notes:'None'
					},
					{
						name:'Jamie',
						status:'Approved',
						notes:'Requires call'
					},
					{
						name:'Jill',
						status:'Denied',
						notes:'None'
					},
				]
			},
			description:'',
			docs:'table story docs'
		},
	],
	docs:'table component docs',
}