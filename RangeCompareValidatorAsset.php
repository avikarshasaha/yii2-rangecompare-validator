<?php
namespace avikarsha\validators;

use yii\web\AssetBundle;

class RangeCompareValidatorAsset extends AssetBundle
{
    /**
     * @inheritdoc
     */
    public $sourcePath = '@vendor/avikarsha/yii2-rangecompare-validator/assets';
    
    /**
     * @inheritdoc
     */
    public $publishOptions = ['forceCopy' => YII_DEBUG];

    /**
     * @inheritdoc
     */
    public $js = [
        'js/rangecompare-validator.js',
    ];
    
    /**
     * @inheritdoc
     */
    public $depends = [
        'yii\validators\ValidationAsset',
    ];
}
