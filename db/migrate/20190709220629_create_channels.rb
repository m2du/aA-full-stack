class CreateChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :channels do |t|
      t.integer :guild_id, null: false
      t.string :name, null: false
      t.timestamps
    end

    add_index :channels, :guild_id
    add_foreign_key :channels, :guilds, column: :guild_id,
                    primary_key: 'id', on_delete: :cascade
  end
end
