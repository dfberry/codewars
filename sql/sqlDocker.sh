docker run -e 'ACCEPT_EULA=Y' -e 'MSSQL_SA_PASSWORD=redrum' -e 'MSSQL_PID=Developer' --cap-add SYS_PTRACE -p 1401:1433 -d microsoft/mssql-server-linux

docker exec -it <Container ID> /opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P 'sqlserverdocke' -Q 'ALTER LOGIN SA WITH PASSWORD="<New Password>";'