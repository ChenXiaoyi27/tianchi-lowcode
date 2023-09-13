# 建表语句
CREATE TABLE lowcode.`user` (
	user_id varchar(100) NOT NULL,
	user_name varchar(100) NOT NULL,
	password varchar(100) NOT NULL,
	create_at DATETIME NOT NULL,
	group_id varchar(100) NULL
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE lowcode.page (
	page_id varchar(100) NOT NULL,
	page_name varchar(100) NOT NULL,
	`lock` BOOL DEFAULT false NOT NULL,
	create_at DATETIME NOT NULL,
	update_at DATETIME NOT NULL,
	creator_id varchar(100) NOT NULL,
	updater varchar(100) NOT NULL,
	group_id varchar(100) NULL
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE lowcode.version (
	version_id varchar(100) NOT NULL,
	old_version_id varchar(100) NULL,
	page_id varchar(100) NOT NULL,
	version_creator_id varchar(100) NOT NULL,
	version_schema LONGBLOB NULL,
	version_note varchar(100) NULL
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_0900_ai_ci;
