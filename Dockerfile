FROM node:latest
WORKDIR /app

# 依存関係をインストール
COPY package.json yarn.lock ./
RUN yarn install

# アプリケーションのソースコードをコピー
COPY . .

# アプリケーションを起動
CMD ["yarn", "dev"]
