# 1. MySQL Installation
``` ubuntu
sudo apt-get install mysql-server

# CHECK INSTALLATION
sudo service mysql status

# LOGIN
sudo mysql -u root -p
```

---
# 2. <u>USERS</u>
``` mysql
/* CREATE LOCAL USER */
CREATE USER 'erabiltzaile_lokala'@'localhost' IDENTIFIED BY 'pasahitza'; 
/* CREATE NETWORK USER */
CREATE USER 'erabiltzaile_sarea'@'%' IDENTIFIED BY 'pasahitza'; 

/* CREATE PASSWORD */
ALTER USER 'erabiltzaile_lokala'@'localhost' IDENTIFIED BY 'pasahitzaBerria'; 
```

---
# 3. <u>ROLES</u>
``` mysql
/* FULL ROLE */
CREATE ROLE 'rol_osoa';

/* GIVE FULL PERMISSIONS */
GRANT ALL PRIVILEGES ON . TO 'rol_osoa';
GRANT SELECT ON universe. TO 'rol_osoa';

/* SLASH ROLE TO USER */
GRANT 'rol_osoa' TO 'erabiltzaile_lokala'@'localhost';

/* REMOVE ROLE TO USER */
REVOKE DELETE ON . FROM 'rol_osoa';
```

---
# 4. OTHER COMMANDS

> [!NOTE]  NOTES
> - FLUSH PRIVILEGES: reloads the MySQL privilege tables
> - mysql.user: Global privileges
> - mysql.db: Database-specific privileges
> - mysql.tables_priv: Table-specific privileges
> -  mysql.columns_priv: Column-specific privileges
> - mysql.procs_priv: Routine-specific privileges
