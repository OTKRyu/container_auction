CREATE TABLE AUCTION (
  ID int,
  CARGO_ID int,
  OWNER_ID int,
  AUCTION_EXPIRE_DATE date,
  AUCTION_START_DATE date,
  TRANSPORT_FEE_UPPER_LIMIT int,
  DETERMINED_TUCKER_ID int,
  AUCTION_STATUS varchar(255)
)