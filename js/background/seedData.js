var seedData = 
	[
		{
			"id": 1,
			"enabled": true,
			"name" : "Timesheet Login",
			"match" : ".*(sagaris).*(login.aspx).*",
			"autorun" : false,
			"controls" : [
				{
					"type": 		"text",
					"name": 		"Username",
					"selector":		"#username",
					"value":		"username"
				},
				{
					"type": 		"password",
					"name": 		"Password",
					"selector":		"#password",
					"value":		"password"
				},
				{
					"type": 		"button",
					"name": 		"Login",
					"selector":		"a.linkbtn:contains('Login')",
					"value":		"click"
				}
			]
		},	
		{
			"id": 2,
			"enabled": true,
			"name" : "Basecamp Login",
			"match" : ".*(basecamphq).*(login).*",
			"autorun" : false,
			"controls" : [
				{
					"type": 		"text",
					"name": 		"Username",
					"selector":		"#username",
					"value":		"username"
				},
				{
					"type": 		"password",
					"name": 		"Password",
					"selector":		"#password",
					"value":		"password"
				},
				{
					"type": 		"button",
					"name": 		"Login",
					"selector":		"input[name='commit']",
					"value":		"click"
				}
			]
		},			
		{
			"id": 3,
			"enabled": true,
			"name" : "Timesheet Day",
			"match" : ".*(sagaris).*(frameset2.aspx).*",
			"autorun" : false,
			"controls" : [
				{
					"type": 		"text",
					"name": 		"Username",
					"selector":		"#letext",
					"value":		"12:35"
				}
			]
		},			
		{
			"id": 4,
			"enabled": true,
			"name" : "CASCAiD App Login",
			"match" : ".*(cascaid|localhost).*(loginpage.aspx).*",
			"autorun" : false,
			"controls" : [
				{
					"type": 		"text",
					"name": 		"Username",
					"selector":		"#ctl00_Content_rer_txtUsername",
					"value":		"username"
				},
				{
					"type": 		"text",
					"name": 		"Password",
					"selector":		"#ctl00_Content_rer_txtPassword",
					"value":		"password"
				},
				{
					"type": 		"button",
					"name": 		"Log in",
					"selector":		"#ctl00_Content_rer_btnLogin",
					"value":		"click"
				}
			]
		},
		{
			"id": 5,
			"enabled": true,
			"name" : "Registration Form",
			"match" : ".*(cascaid|localhost).*(register.aspx).*",
			"autorun" : false,
			"controls" : [
				{
					"type": 		"text",
					"name": 		"Username",
					"selector":		"#txtUsername",
					"value":		"user",
					"uniqueFactor":	 true
				},
				{
					"type": 		"text",
					"name": 		"Password",
					"selector":		"#txtPassword, #txtPassword1",
					"value":		"password"
				},
				{
					"type": 		"text",
					"name": 		"Email",
					"selector":		"#txtEmail",
					"value":		"dummy@s7f.eu"
				},
				{
					"type": 		"text",
					"name": 		"First name",
					"selector":		"#txtFirstName",
					"value":		"First-name"
				},
				{
					"type": 		"text",
					"name": 		"Last name",
					"selector":		"#txtLastName",
					"value":		"Last-name"
				},
				{
					"type": 		"select",
					"name": 		"Organisation",
					"selector":		"#childOrganisationDropDownList",
					"value":		"last"
				},
				{
					"type": 		"checkbox",
					"name": 		"Accept Ts and Cs",
					"selector":		"#ctl00_Content_Registerctrl_chkTerms",
					"value":		"checked"
				},
				{
					"type": 		"button",
					"name": 		"Create my account",
					"selector":		"#ctl00_Content_Registerctrl_btnSave",
					"value":		"click"
				}

			]
		},
		{
			"id": 6,
			"enabled": true,
			"name" : "Ask Aspects",
			"match" : ".*((cascaid|localhost).*(askaspects.aspx)).*",
			"autorun" : false,
			"controls" : [
				{
					"type": 		"button",
					"name": 		"Aspects button 1",
					"selector":		"button[id$='aspectscarousel_rptQuestions_ctl01_rptOptions_ctl01_btn']",
					"value":		"click"
				},
				{
					"type": 		"button",
					"name": 		"Aspects button 2",
					"selector":		"button[id$='aspectscarousel_rptQuestions_ctl02_rptOptions_ctl03_btn']",
					"value":		"click"
				},
				{
					"type": 		"button",
					"name": 		"Aspects button 3",
					"selector":		"button[id$='aspectscarousel_rptQuestions_ctl03_rptOptions_ctl04_btn']",
					"value":		"click"
				},
				{
					"type": 		"pause",
					"name": 		"Pause for (ms)",
					"value": 		300
				},
				{
					"type": 		"goto",
					"name": 		"Go to step",
					"value": 		1
				}
			]
		}
	];