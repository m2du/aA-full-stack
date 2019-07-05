class CreateGuilds < ActiveRecord::Migration[5.2]
  def change
    create_table :guilds do |t|
      t.string :name, null: false
      t.integer :owner_id, null: false
      t.timestamps
    end

    add_index :guilds, :owner_id
    add_foreign_key :guilds, :users, column: :owner_id,
                    primary_key: 'id', on_delete: :restrict
  end
end
