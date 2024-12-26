
localStorage.clear
   const  employees= [
    {
      "id": 1,
      "firstName": "Amit",
      "email": "e@e.com",
      "password": "123",
      "taskNumber": {
        "active": 2,
        "newTask": 1,
        "completed": 1,
        "failed": 0
      },
      "tasks": [
        {
          "taskTitle": "Prepare Monthly Report",
          "taskDescription": "Compile and review monthly sales report.",
          "taskDate": "2024-10-28",
          "category": "Reports",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Client Meeting",
          "taskDescription": "Attend meeting with client XYZ to discuss project updates.",
          "taskDate": "2024-10-30",
          "category": "Meetings",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Update Documentation",
          "taskDescription": "Revise and update project documentation for team.",
          "taskDate": "2024-11-01",
          "category": "Documentation",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    },
    {
      "id": 2,
      "firstName": "Vikram",
      "email": "employee2@example.com",
      "password": "123",
      "taskNumber": {
        "active": 1,
        "newTask": 1,
        "completed": 1,
        "failed": 0
      },
      "tasks": [
        {
          "taskTitle": "Bug Fixing",
          "taskDescription": "Resolve critical bugs reported by QA.",
          "taskDate": "2024-10-28",
          "category": "Development",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Code Review",
          "taskDescription": "Review code for team members in Sprint 5.",
          "taskDate": "2024-10-29",
          "category": "Review",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    },
    {
      "id": 3,
      "firstName": "Priya",
      "email": "employee3@example.com",
      "password": "123",
      "taskNumber": {
        "active": 2,
        "newTask": 1,
        "completed": 1,
        "failed": 0
      },
      "tasks": [
        {
          "taskTitle": "Marketing Campaign",
          "taskDescription": "Plan social media strategy for new product launch.",
          "taskDate": "2024-11-01",
          "category": "Marketing",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Content Creation",
          "taskDescription": "Create blog posts for October updates.",
          "taskDate": "2024-10-29",
          "category": "Content",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Email Campaign Analysis",
          "taskDescription": "Analyze engagement metrics for the last email campaign.",
          "taskDate": "2024-10-27",
          "category": "Marketing",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    },
    {
      "id": 4,
      "firstName": "Anjali",
      "email": "employee4@example.com",
      "password": "123",
      "taskNumber": {
        "active": 1,
        "newTask": 1,
        "completed": 1,
        "failed": 0
      },
      "tasks": [
        {
          "taskTitle": "Team Training",
          "taskDescription": "Conduct training session on customer service skills.",
          "taskDate": "2024-10-30",
          "category": "Training",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Customer Feedback",
          "taskDescription": "Gather and analyze feedback from recent surveys.",
          "taskDate": "2024-10-27",
          "category": "Feedback",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    },
    {
      "id": 5,
      "firstName": "Rajesh",
      "email": "employee5@example.com",
      "password": "123",
      "taskNumber": {
        "active": 2,
        "newTask": 1,
        "completed": 0,
        "failed": 0
      },
      "tasks": [
        {
          "taskTitle": "Inventory Check",
          "taskDescription": "Verify and update stock levels.",
          "taskDate": "2024-10-28",
          "category": "Inventory",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Supplier Meeting",
          "taskDescription": "Discuss new terms with supplier ABC.",
          "taskDate": "2024-11-01",
          "category": "Meetings",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        }
      ]
    }
  ]

    const admin = [ 
        {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }]
  
    export const setLocalStorage=()=>{
        localStorage.setItem('employees',JSON.stringify(employees))//Stores employee data
        localStorage.setItem('admin',JSON.stringify(admin))//stores admin data
    }
    export const getLocalStorage=()=>{

        const employees=JSON.parse(localStorage.getItem('employees'))// Fetch employees data
        const admin=JSON.parse(localStorage.getItem('admin'))//fetch admin data
      //  console.log(employees,admin)
      return {employees,admin}
        
    }
  