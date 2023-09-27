Для тестирования используем netlify
Важно! В корень проекта необходимо добавить файл netlify.toml
На гите создал пустой репозитарий react_for_math, запушил туда проект.
Авторизовался на netlyfy.com через github, далее Sites -> Add new Site(т.к. у меня там уже был сайт )подключил проект(Import an axisting project) , запустил deploy 
https://app.netlify.com/sites/storied-praline-da4b4c/deploys/64ecba1421896e24b0b82688
и получил ссылку на "сайт": 
https://bright-parfait-0208bc.netlify.app
Netlify автоматически обновляет deploy после изменений (push) на github

Netlify интересная штука
У меня на FastVps создан back_end для telegram bot test_mevnik
Там прописал url https://bright-parfait-0208bc.netlify.app (для этого внес изменения у себя в проект, спушил на git и по ssh спулил с гита на Fastvps)и после этого по кнопке "go to shop" открывается мой сайт
