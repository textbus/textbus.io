<template>
  <div class="ui-container">
    <div class="ui-row">
      <div class="ui-col-md-4"></div>
      <div class="ui-col-md-16">
        <h2>商业授权</h2>
        <p>Textbus 为 GPL 开源协议软件，如果你仅为自用，且不违反 GPL 开源协议，那么你无需支付任何费用。如果你想作为商业用途，请阅读以下授权说明。</p>
        <h3>特殊群体及行业的免费授权</h3>
        <p>Textbus 的开发完全是作者用爱发电，所以初衷并不是为了收费，对于<strong>小微企业或创业团队（公司规模少于 20 人），在校大学生不收费</strong>。对利国利民的行业，如教育、医疗、养老等相关社会公益性质的单位，原则上是可以不收费的。如果你是相关单位的经营负责人，请联系作者。</p>
        <p><strong class="color-red">但对于一些大公司或企业，Textbus 坚决抵制白嫖，请保持大企业的节操。</strong></p>
        <h3>如何取得商业授权？</h3>
        <p>成为 Textbus 的固定赞助商，你即可将 Textbus 用于商业用途。请你先阅读以下授权协议：</p>
        <ul>
          <li>你取得的 Textbus 商业授权仅为使用权。所有权、著作权、专利权等一系列权利属于 Textbus 作者。</li>
          <li>你取得的商业授权不得以任何形式转让，包括且不限于企业主体变更、法人变更、子女或法定亲属继承等。也不得以任何形式，再次授权给你的合作者或其它任何人或主体。</li>
          <li>你取得的商业授权仅为同一个人或同一公司的单个产品使用，如需使用在多个产品，你需要重新取得授权。</li>
          <li>你所取得的授权仅为在你成为赞助商这一时刻的 Textbus 已发布的主版本。如：2.0.0。但 3.0.0 及以上大版本，你需要重新获得授权。</li>
          <li>你可以在基础版的基础上开发自己的协同实现技术方案，但你仍需要取得 Textbus 协同版的授权。否则视为未取得 Textbus 商业授权。</li>
          <li>Textbus 作者或官方不承担你采用 Textbus 所产生的任何不利影响及不利法律后果。如：数据安全、经营损失等。</li>
          <li>你不得将 Textbus 用于非法用途，否则授权立即终止。</li>
          <li>你不得将 Textbus 用于损害中华人民共和国国家利益和人民利益的用途，否则授权立即终止。</li>
          <li>如果已经把 Textbus 作为商业用途，且未成为 Textbus 的赞助商，后续补充相关赞助费用不影响 Textbus 官方或作者追溯在这之前对 Textbus 所产生损失的权利和赔偿。</li>
          <li>订阅一旦开始，将不退还任何费用，请你在订阅之前，仔细阅读 Textbus 相关文档，确认是否满足你的需求。</li>
          <li>Textbus 作者或官方，可以在任何时候更改授权条款，已产生的授权不受影响。</li>
        </ul>
        <h3>赞助方式</h3>
        <p>你可以通过以下二维码扫码赞助，并注明备注为<strong>商业授权赞助</strong>。付款完成后，请保存好相关凭证，作为授权依据。</p>
        <div>
          <img src="../../assets/alipay.png" style="width:230px;height:auto">&nbsp;&nbsp;&nbsp;&nbsp;<img
            src="../../assets/wxpay.png" style="width:230px;height:auto">
        </div>
        <div class="products">
          <h4>基础版</h4>
          <div>
            <p>基础版包括 Textbus 核心模块（Core）、浏览器支持模块（Browser）、编辑器模块（Editor），订阅方式为：</p>
            <p><strong>5</strong> 元人民币每人/月</p>
            <p><strong>48</strong> 元人民币每人/年</p>
          </div>
          <h4>协同版</h4>
          <div>
            <p>在基础版的基础上，再增加 Textbus 协同模块（Collaborate），订阅方式为：</p>
            <p><strong>8</strong> 元人民币每人/月</p>
            <p><strong>68</strong> 元人民币每人/年</p>
          </div>
        </div>
        <h3>技术支持</h3>
        <div>
          <p>请扫描以下二维码，加入 Textbus 官方群，并联系群主。</p>
          <p><img style="width: 252px" src="../../assets/qq-group.png"></p>
        </div>
      </div>
      <div class="ui-col-md-4"></div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "../../scss/varibles";

.color-red {
  color: $color-danger;
}

.ui-container {
  padding-bottom: 30px;
  color: #555;
  line-height: 1.5;

  h2, h3, h4 {
    margin-top: 2em;
  }
}

.products {
  > div {
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .1);
    padding: 10px 30px;
    background: #f5f5f5;

    strong {
      color: $color-danger;
      font-size: 1.2em;
    }
  }
}

ul {
  list-style: none;
}

li {
  padding: 0.5em 0;
  position: relative;

  &:before {
    content: "";
    width: 5px;
    height: 5px;
    background: $color-primary;
    position: absolute;
    left: -1em;
    top: 16px;
  }
}
</style>
