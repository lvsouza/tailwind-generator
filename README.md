# Body to send

POST -> `http://localhost:3333/class-names`

```JSON
{
    "mode": "aot",
    "purge": false,
    "variants": {
        "extend": {
            "backgroundColor": [
                "disabled",
                "focus",
                "active",
                "hover",
                "checked"
            ],
            "opacity": [
                "disabled",
                "focus",
                "active",
                "hover",
                "checked"
            ],
            "cursor": [
                "disabled",
                "focus",
                "active",
                "hover",
                "checked"
            ]
        }
    },
    "plugins": []
}
```
