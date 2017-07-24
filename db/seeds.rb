Todo.destroy_all
Step.destroy_all

todo1 = Todo.create(title: 'Cat', body: 'Buy cat food', done: false)
todo2 = Todo.create(title: 'Meditate', body: 'Take some breaths', done: false)

step1 = Step.create(title: 'Get cat', body: 'a cute one', todo_id: todo1.id)
step2 = Step.create(title: 'Understand', body: 'its food preferences', todo_id: todo1.id)

step3 = Step.create(title: 'Lay down', body: 'still yourself', todo_id: todo2.id)
