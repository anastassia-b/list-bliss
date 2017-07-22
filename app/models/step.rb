class Step < ApplicationRecord
  validates :title, :todo_id, presence: true
  validates :done, inclusion: [true, false], default: false
  after_initialize { self.done = false if self.done.nil? }

  belongs_to :todo
end
