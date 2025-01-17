module Mutations
  class CreateTask < BaseMutation
    argument :title, String, required: true
    argument :description, String, required: false
    argument :completed, Boolean, required: false

    field :task, Types::TaskType, null: false

    def resolve(title:, description: nil, completed: false)
      task = Task.create!(title: title, description: description, completed: completed)
      { task: task }
    end
  end
end
  