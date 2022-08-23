
## Firstpost

This project is a clone of a news website of News-18 group name as 'Firstpost'.
Project involves use of some news api's for cloning and frontend technologies as, HTML, CSS, Javascript.





## Acknowledgements

 - [Awesome Readme Templates](https://readme.so/editor)
 - [For Awsome Icons](https://fontawesome.com/icons)
 - [How to write a Good readme](https://www.youtube.com/watch?v=Rtpu2cWz7W8&t=253s)
 - [Getting headlines and live news](https://mediastack.com/documentation)
 


## API Reference

#### Get Searched News

```http
  https://api.mediastack.com/v1/news
    ? access_key = YOUR_ACCESS_KEY & search = abc
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |
| `access_key`|`string`|**Required** Use this parameter to specify your unique API access key, which is shown when you log in to your account dashboard.|
| `search`  |`string`|**Required** Use this parameter to specify one or multiple search keywords.|

#### Get News According To Categories

```http
  https://api.mediastack.com/v1/news
    ? access_key = YOUR_ACCESS_KEY
    & categories = health,-sports
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
|`access_key`| `string`|**Required** Use this parameter to specify your unique API access key, which is shown when you log in to your account dashboard.|
| `categories`      | `string` | [Optional] Use this parameter to include or exclude one or multiple comma-separated news categories. Example: To include business, but exclude sports: &sources=business,-sports. |




## Authors

- [@Abhishek Kagale](https://github.com/abhishek11125)
- [@Sagar Suryawanshi](https://github.com/SagarSuryawans)
- [@Awagat Sahu](https://github.com/Swagatsahu99)
- [@Abhishek Jha](https://github.com/3003abhishek)
- [@Ahmed Raja Khan](https://github.com/ahmed700366)


![Logo](https://getlogo.net/wp-content/uploads/2020/04/firstpost-logo-vector.png)

