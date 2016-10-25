A TAG Interativa está querendo adquirir uma vaca para ser o mascote da agência. Fizemos vários orçamentos e criamos uma lista com diversas opções de vacas. Também fizemos um levantamento com uma série de informações que mostram como devemos nos preparar para receber e cuidar bem da nossa vaquinha :)

Ao conversarmos com alguns criadouros, compilamos alguns dados sobre este animal, como sua média de vida de 20 anos. Além disso, a alimentação da vaca segue uma regra importante: cada 100kg de peso de vaca exige uma alimentação diária correspondente a 3kg de pasto. Descobrimos, ainda, que 1kg de pasto custa R$ 0,20 (vinte centavos).

Desafio

Queremos o bem-estar da nossa bovina! Por isso, diante dessas informações solicitamos que você desenvolva um programa em que possamos informar o peso, a idade e o preço da vaca e que essas informações sejam enviadas para nossa base de dados. Essa comunicação será enviada através de um método POST na API, disponibilizada pela TAG.

Com posse das informações armazenadas, em um novo método, o programa deve determinar quanto de pasto vou gastar por mês para cada vaca, custo anual total de cada vaca e qual vaca devo comprar considerando o melhor custo-benefício. Para desenvolver esse requisito, será disponibilizado outro método da API que listará todas as vacas cadastradas no passo anterior.

Considerar 30 dias para cada mês, 365 dias para cada ano e 20 anos a vida máxima de cada vaquinha. O resultado deverá ser exibido em tela.

*** O melhor custo-beneficio foi determinado pelo desenvolvedor tomando em conta a média da idade, peso e preço de cada uma das vacas cadastradas. Dando pontos a cada vaca que cumprisse a norma da média em cada parâmetro, depois escolhemos as vacas com mais pontos e se repete o algoritmo até ficar só uma vaca que seria a ganhadora.