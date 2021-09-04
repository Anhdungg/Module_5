export interface YoutubeData {
  "kind": string,
  "etag": string,
  "items": [
    {
      "kind": string,
      "etag": string,
      "id": string,
      "snippet": {
        "publishedAt": string,
        "channelId": string,
        "title": string,
        "description": string,
        "thumbnails": {
          "default": {
            "url": string,
            "width": number,
            "height": number
          },
          "medium": {
            "url": string,
            "width": number,
            "height": number
          },
          "high": {
            "url": string,
            "width": number,
            "height": number
          },
          "standard": {
            "url": string,
            "width": number,
            "height": number
          },
          "maxres": {
            "url": string,
            "width": number,
            "height": number
          }
        },
        "channelTitle": string,
        "tags": [
          "BUM SIMULATOR",
          "game nhập vai",
          "game giả lập",
          "game hài",
          "dũng ct",
          "trực tiếp game",
          "Nonolive",
          "game sinh tồn"
        ],
        "categoryId": string,
        "liveBroadcastContent":string,
        "localized": {
          "title": string,
          "description": string
        }
      },
      "contentDetails": {
        "duration": string,
        "dimension": string,
        "definition": string,
        "caption": string,
        "licensedContent": boolean,
        "contentRating": {},
        "projection": string
      },
      "status": {
        "uploadStatus": string,
        "privacyStatus": string,
        "license": string,
        "embeddable": boolean,
        "publicStatsViewable": boolean,
        "madeForKids": boolean
      },
      "statistics": {
        "viewCount": string,
        "likeCount": string,
        "dislikeCount": string,
        "favoriteCount": string,
        "commentCount": string
      }
    }
  ],
  "pageInfo": {
    "totalResults": number,
    "resultsPerPage": number
  }
}
