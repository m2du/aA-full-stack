class CreateMemberships < ActiveRecord::Migration[5.2]
  def change
    create_table :memberships do |t|
      t.integer :guild_id, null: false
      t.integer :user_id, null: false
      t.timestamps
    end

    add_index :memberships, [:user_id, :guild_id], unique: true
    add_foreign_key :memberships, :guilds, column: :guild_id,
                    primary_key: 'id', on_delete: :cascade
    add_foreign_key :memberships, :users, column: :user_id,
                    primary_key: 'id', on_delete: :cascade
  end
end
