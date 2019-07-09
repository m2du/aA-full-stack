class CreateInvites < ActiveRecord::Migration[5.2]
  def change
    create_table :invites do |t|
      t.integer :guild_id, null: false
      t.string :url, null: false
      t.boolean :expired, default: false
      t.timestamps
    end

    add_index :invites, :url, unique: true
    add_foreign_key :invites, :guilds, column: :guild_id,
                    primary_key: 'id', on_delete: :cascade
  end
end
