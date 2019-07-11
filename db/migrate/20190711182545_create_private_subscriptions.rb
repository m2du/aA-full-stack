class CreatePrivateSubscriptions < ActiveRecord::Migration[5.2]
  def change
    create_table :private_subscriptions do |t|
      t.integer :user_id, null: false
      t.integer :channel_id, null: false
      t.timestamps
    end
    
    add_index :private_subscriptions, :channel_id
    add_index :private_subscriptions, [:user_id, :channel_id], unique: true

    add_foreign_key :private_subscriptions, :channels, column: :channel_id,
                    primary_key: 'id', on_delete: :cascade
    add_foreign_key :private_subscriptions, :users, column: :user_id,
                    primary_key: 'id', on_delete: :cascade
  end
end
