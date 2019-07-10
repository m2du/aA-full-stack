class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.string :body, null: false
      t.integer :author_id, null: false
      t.integer :channel_id, null: false
      t.timestamps
    end

    add_index :messages, :author_id
    add_index :messages, :channel_id
    add_foreign_key :messages, :users, column: :author_id,
                    primary_key: 'id', on_delete: :cascade
    add_foreign_key :messages, :channels, column: :channel_id,
                    primary_key: 'id', on_delete: :cascade
  end
end
