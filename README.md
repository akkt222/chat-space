## usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_name|string|null: false|
|email|string|null: false|
|password|string|null: false|

### Association
- has_many: messages, through: :groups_users
- belongs_to: groups
- has_many: groups_users

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false|

### Association

- has_many: users, through: :groups_users
- has_many: messages

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|text|text||
|image|text||

### Association
- belongs_to :group
- belongs_to :user

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user